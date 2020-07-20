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
            //console.log(childSnapshot.val());
        });
        console.log(donationList);
        if (callBackFunction)
            callBackFunction(donationList.reverse());
    });
}