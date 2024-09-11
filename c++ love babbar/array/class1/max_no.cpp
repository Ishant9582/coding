#include <iostream>
#include <limits.h>
using namespace std;
int maxno(int arr[] , int size){
   
    int maxno = INT_MIN ;
    for(int i = 0 ; i<size ; i++){
        maxno = max(maxno , arr[i]) ;
    }
    return maxno;
}
int main(){
    int arr[] = {1,2,3,4,5,6} ;
    int size = sizeof(arr)/sizeof(arr[0]) ;
    int max = maxno(arr,size) ;
    cout<<"max no is : "<<max<<endl ;
}
