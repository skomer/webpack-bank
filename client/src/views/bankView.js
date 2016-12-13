var BankView = function(bank) {

    var totalDisplay = document.getElementById('total');
    var bTotalDisplay = document.getElementById('business-total');
    var pTotalDisplay = document.getElementById('personal-total');

    totalDisplay.innerText = "Total: £" + bank.totalCash();
    bTotalDisplay.innerText = "Business Accounts Total: £ " + bank.totalCash('business');
    pTotalDisplay.innerText = "Personal Accounts Total: £ " + bank.totalCash('personal');

    var accountList = document.getElementById('accounts');
    var bAccountList = document.getElementById('business-accounts');
    var pAccountList = document.getElementById('personal-accounts');

    function populateList(type, list) {
        for (account of bank.filteredAccounts(type)) {
            var listItem = document.createElement('li');
            listItem.innerText = account.owner + ": £" + account.amount;
            list.appendChild(listItem);
        }
    }

    populateList('', accountList);
    populateList('business', bAccountList);
    populateList('personal', pAccountList);

}

module.exports = BankView;



