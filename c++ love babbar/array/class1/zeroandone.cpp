#include <iostream>
using namespace std ;
int findcount(int arr[],int size){
    int zerocount = 0 ;
    int onecout = 0 ;
    for(int i = 0 ;i<size ; i++){
        if(arr[i]==0){
            zerocount++ ;
        }
        else if(arr[i]==1){
            onecout++ ;
        }
        else{
            cout<<"no. is not 1 neither 0"<<endl ;
        }
    }
    cout<<"no. of zeroes are "<<zerocount<<endl ;
    cout<<"no. of ones are "<<onecout<<endl;
}
int main(){
    int arr[] = {1,2,0,0,0,0,1,1,1,1} ;
    int size = 10 ;
    findcount(arr , size );
}