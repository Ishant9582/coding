#include<iostream>
using namespace std;
int f(int arr[],int idx,int n){
    if(idx==n-1){
        return arr[idx];
    }
    
    //return max(arr[idx],f(arr,idx+1,n)); //using max 
    if(arr[idx]>f(arr,idx+1,n)){
        return arr[idx];
    }
    else{
        return arr[idx+1];
    }
  
      
   

}
int main(){
    int n=5;
    int arr[]={6,1,2,3,4};
    int p = f(arr,0,n);
    cout<<p;
    

}