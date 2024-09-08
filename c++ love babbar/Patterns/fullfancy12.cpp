#include <iostream>
using namespace std ;
int main(){
    int n = 9;
    for(int i =1 ; i<=n ; i++){
        for(int j=1 ; j<=i ; j++){
            cout<< i ;
            if(j<i){
                cout<<"*" ;
            }
        }
        cout<<endl ;
    }

    // for inverted
    for(int i = n-1 ; i>0 ; i--){
        for(int j = 0 ; j<i ; j++){
            cout<<i;
            if(j<i-1){
                cout<<"*" ;
            }
        }
        cout<<endl ;
    }
    
}