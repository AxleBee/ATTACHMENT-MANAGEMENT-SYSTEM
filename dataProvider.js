import jsonServerProvider from 'ra-data-json-server';

const addUserProfileOverrides=dataProvider=>({
    ...dataProvider,
    getUserProfile(params){
        const storedProfile=localStorage.getItem("profile");

        if(storedProfile){
            return Promise.resolve({
                data:JSON.parse(storedProfile),
            });
        }

        return Promise.resolve({
            data:{
                id:'unique-id',
                fullName:"",
                avatar:""
            },
        });
    },

    updateaUserProfile(params){
        localStorage.setItem("profile",JSON.stringify({id:'unique-id',...params.data}));
        return Promise.resolve({data:params.data});
    }
});

export default addUserProfileMethods(
    jsonRestProvider(data)
);