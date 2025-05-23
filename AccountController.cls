public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [select Id, Name, Phone, Industry from Account limit 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccounts(String type){
        return[SELECT Id, Name, Type, Industry from Account where Type = :type limit 5];
    }
}