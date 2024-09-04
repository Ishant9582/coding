#include <iostream> 
using namespace std ;
int main(){
    int r = 5 ;
    for(int i=r ; i>0 ; i--){
        for(int j = i ; j>0 ; j--){
            cout<<"* ";
        }
        cout<<endl ;
    }
    
}