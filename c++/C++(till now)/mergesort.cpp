#include<iostream>
using namespace std;
void merge(int arr[],int l,int mid,int r){
    int an = mid-l+1;
    int bn = r-mid;
    // creating two temporary array
    int a[an] , b[bn];
    for(int i=0 ; i<an ; i++){
        a[i]=arr[l+i];

    }
    for(int i=0 ; i<bn ; i++){
        b[i]=arr[mid+i+1];

    }
    int i=0,j =0 ;//initial index of array a and b
    int k=l;   // initial index of merged array
    while(i<an && j<bn){
        if(a[i]<b[j]){
            
        
            arr[k++]=a[i++];
        }
        else{

            arr[k++]=b[j++];
        }
    }
    while(i<an){
        arr[k++]=a[i++];
    }
    while(j<bn){
        arr[k++]=b[j++];
    }

}
void mergesort(int arr[],int l,int r){
    if(l>=r) return;
    int mid = (l+r)/2;
    mergesort(arr,l,mid);
    mergesort(arr,mid+1,r);
    merge(arr,l,mid,r);

}
int main(){
    int arr[] = {10,28,29,40,6,7,5,8};
    int n = sizeof(arr)/sizeof(arr[0]);
    mergesort(arr,0,n-1);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}