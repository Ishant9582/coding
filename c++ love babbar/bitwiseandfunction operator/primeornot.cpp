#include <iostream>
using namespace std ;
bool  prime(int n){
        for(int i=2 ; i<n-1 ; i++){
        if((n%2)==0){
            return false ;
        }
        else{
            return true ;
        }
    }
}
int main(){
    int n ;
    cout<<"enter no. to check :";
    cin>>n ;
    bool a = prime(n) ;  
    if(a == true){
        cout<<"this no. is prime";
    }
    else{
        cout<<"this is not prime" ;
    }
}
