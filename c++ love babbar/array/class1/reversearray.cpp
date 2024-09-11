#include <iostream> 
using namespace std ;
void reverse(int arr[] , int size){
    
    int j = size-1 ;
   
    for(int i=0 ; i<size/2 ; i++){
        cout<<size ;
        int temp = arr[i] ;
        
     
        
        arr[i] = arr[j] ;
        arr[j] = temp ;
        j-- ;
        
    }
    cout<<"here us your array : ";
   for(int i=0 ; i<size ; i++){
    cout<<arr[i]<<"  ";
   }
}
int main(){
    int arr[] = {1,2,3,4,5,6,8} ;
    int size = 7 ;
    reverse(arr,size) ;
    

}