public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        try {
            return [select firstName,lastName,email from Contact with SECURITY_ENFORCED order by lastName];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        
    }
}