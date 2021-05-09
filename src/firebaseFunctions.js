import * as firebase from 'firebase';

export function writeDonationData(donationData){
    const donationListRef = firebase.database().ref().child('donation-list');
    donationListRef.push(donationData);
}

//TODO: make this function return sucessive sets of n
export function readDonationData(callBackFunction){
    const donationListRef = firebase.database().ref().child('donation-list');
    const orderdDonationList = donationListRef.orderByChild("donationAmount");
    orderdDonationList.on('value', function(snapshot) {
        var donationList = []
        snapshot.forEach(function(childSnapshot) {
            donationList.push(childSnapshot.val())
        });
        if (callBackFunction)
            callBackFunction(donationList.reverse());
    });
}

export function totalDonated(callBackFunction){
    const donationListRef = firebase.database().ref().child('donation-list');
    donationListRef.on('value', function(snapshot) {
        var donationTotal = 0;
        snapshot.forEach(function(childSnapshot) {
            donationTotal += childSnapshot.child('donationAmount').val();
        });
        if(callBackFunction)
            callBackFunction(donationTotal);
    });
}

export function totalDonationsForCharities(callBackFunction){
    const donationListRef = firebase.database().ref().child('donation-list');
    donationListRef.once('value', function(snapshot) {
        var donationDict = {};
        snapshot.forEach(function(childSnapshot) {
            const currentDonationAmount = childSnapshot.child('donationAmount').val();
            const charityName = childSnapshot.child('charity').val();
            if(donationDict[charityName]){
                donationDict[charityName] += currentDonationAmount;
            }else{
                donationDict[charityName] = currentDonationAmount;
            }
        });
        if(callBackFunction)
            callBackFunction(donationDict);
    });
}