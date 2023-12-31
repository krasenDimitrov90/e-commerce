import { Contacts } from "../../modules";

export const ContactsTypes = () => {
    return (
        <div className="mt-10 [w-500px] flex p-4 bg-blue-500">
            <Contacts
                variant={Contacts.variants.PRIMARY}
                properties={Contacts.properties.MAIL}
                info='contacts@shik.bg'
            />
            <div className="ml-10">
                <Contacts
                    variant={Contacts.variants.PRIMARY}
                    properties={Contacts.properties.PHONE}
                    info='+359 894 66 43 27'
                />
            </div>
        </div>
    );
};