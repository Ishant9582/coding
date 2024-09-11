#include <iostream>
using namespace std ;
bool linearsearch(int arr[] , int size , int target){
    for(int i=0;i<size;i++){
        if(arr[i]==target){
            return true ;
        }
    }
    return false ;
}
int main(){
   int arr[8] ;
   int target ;
   cout<<"enter target value : " ;
   cin>>target ;
      // aalag se ek size variable good practice man lo user ko ek particular no. p work krna ho to
   int size = 8 ;
   for(int i = 0 ; i<size ; i++){
    cout<<"enter value to be present at "<<i<<" :" ;
    cin>>arr[i] ;
   }

   int res = linearsearch(arr,size,target) ;
   if (res == 1){
    cout<<target<<" "<<"is present in array" ;
   }
   else{
    cout<<"no such target in array" ;
   }
}