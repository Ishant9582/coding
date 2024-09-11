#include <iostream>
using namespace std ;
void printextreme(int arr[] , int size){
    int j = size-1 ;
    for(int i=0 ; i<size/2 ; i++){
        cout<<arr[i]<<" " ;
        cout<<arr[j]<<" " ;
        j-- ;
    }
}
int main(){
    int arr[] = {1,2,3,4,5,6} ;
    int size = 6 ;
    printextreme(arr , size) ;

}
