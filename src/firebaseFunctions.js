import * as firebase from 'firebase';

export function writeDonationData(donationData){
    const donationListRef = firebase.database().ref().child('donation-list');
    donationListRef.push(donationData);
}

export function readDonationData(callBackFunction){
    const donationListRef = firebase.database().ref().child('donation-list');
    const orderdDonationList = donationListRef.orderByChild("donationAmmount");
    orderdDonationList.on('value', function(snapshot) {
        var donationList = []
        snapshot.forEach(function(childSnapshot) {
            donationList.push(childSnapshot.val())
        });
        //console.log(donationList);
        if (callBackFunction)
            callBackFunction(donationList.reverse());
    });
}

export function totalDonated(callBackFunction){
    const donationListRef = firebase.database().ref().child('donation-list');
    return donationListRef.on('value', function(snapshot) {
        var donationTotal = 0;
        snapshot.forEach(function(childSnapshot) {
            donationTotal += childSnapshot.child('donationAmmount').val();
        });
        //console.log(donationTotal);
        if(callBackFunction)
            callBackFunction(donationTotal);
    });
}