import { Contacts } from "../../modules";

export const ContactsTypes = () => {
    return (
        <div className="[w-500px] flex p-4 bg-blue-500">
            <Contacts
                variant='mail'
                info='contacts@shik.bg'
            />
           <div className="ml-10">
           <Contacts
                variant='phone'
                info='+359 894 66 43 27'
            />
           </div>
        </div>
    );
};