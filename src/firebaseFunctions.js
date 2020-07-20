import * as firebase from 'firebase';

export function writeDonationData(donationData){
    console.log("writeDonationData called");
    const rootRef = firebase.database().ref().child('donation-list');
    rootRef.push(donationData);
}