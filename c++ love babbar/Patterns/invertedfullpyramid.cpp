#include <iostream> 
using namespace std ;
int main(){
    int n = 5 ;
    for(int i = 1 ; i<=n ; i++){
        for(int j=n ; j>=1 ; j--){
            if(j>n-i+1){
                cout<<" " ;
            }
            else{
                cout<<"* ";
            }

        }
        cout<<endl ;
    }
    if(4>4){
        cout<<"hoyabeej ";
    }
}