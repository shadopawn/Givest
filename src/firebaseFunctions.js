import * as firebase from 'firebase';
import { charityList } from './charityInfo';

export function writeDonationData(donationData){
    const donationListRef = firebase.database().ref().child('donation-list');
    donationListRef.push(donationData);
}

//TODO: meke this function return sucessive sets of n
export function readDonationData(callBackFunction){
    const donationListRef = firebase.database().ref().child('donation-list');
    const orderdDonationList = donationListRef.orderByChild("donationAmount");
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
    donationListRef.on('value', function(snapshot) {
        var donationTotal = 0;
        snapshot.forEach(function(childSnapshot) {
            donationTotal += childSnapshot.child('donationAmount').val();
        });
        //console.log(donationTotal);
        if(callBackFunction)
            callBackFunction(donationTotal);
    });
}

// not a pure function should definitely rewrite
export function calculateTotalDonationsForCharities(){
    const donationListRef = firebase.database().ref().child('donation-list');
    donationListRef.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            const currentDonationAmount = childSnapshot.child('donationAmount').val();
            const charityName = childSnapshot.child('charity').val();
            charityList.forEach(charity => {
                if (charityName === charity.name){
                    charity.totalDonated += currentDonationAmount;
                }
            })
        });
    });
}