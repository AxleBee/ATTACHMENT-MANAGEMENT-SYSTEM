import React,{useCallback,useMemo, useState} from "react";
import { FileInput,TextInput,SimpleForm,required, useDataProvider, useNotify, useGetIdentity, SaveContextProvider } from "react-admin";
import { UserList } from "./users";

export const ProfileEdit =({staticContext,...props})=>{
    const dataProvider=useDataProvider();
    const notify=useNotify();
    const [saving,setSaving]=useState();
    const{refreshProfile}=useProfile();

    const{loaded, identity}=useGetIdentity();

    const handleSave=useCallback((values)=>{
        setSaving(true);
        dataProvider.updateUserProfile(
            {data:values},
            {
                onSuccess:({data})=>{
                    setSaving(false);
                    notify("Your profile has been updated","info",{_:"Your profile has been updated"});
                    refreshProfile();
                },

                onFailure:()=>{
                    setSaving(false);
                    notify("An error has occured while updating your profile.Please try again later.","warning",{
                        _:
                        "An error has occured while updating your profile.Please try again later."
                    }
                    );
                }
            }
        );
    }, [dataProvider,notify,refresh]
    )
    const saveContext=useMemo(()=>({
        save:handleSave,
        saving
    }),[saving,handleSave]
    );
    if(!user.loaded){
        return null;
    }
    return(
        <SaveContextProvider value={saveContext}>
            <SimpleForm save={handleSave} record={identity ? identity:{}}>
                <TextInput source="fullName" validate={required()}/>
                <TextInput source="avatar" validate={required()}/>
            </SimpleForm>
        </SaveContextProvider>
    )
    }

    const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileVersion, setProfileVersion] = useState(0);
  const context = useMemo(
    () => ({
      profileVersion,
      refreshProfile: () =>
        // Increment the version which will update the state
        setProfileVersion((currentVersion) => currentVersion + 1)
    }),
    [profileVersion]
  );

  return (
    <ProfileContext.Provider value={context}>
      {children}
    </ProfileContext.Provider>
  );
};
   
