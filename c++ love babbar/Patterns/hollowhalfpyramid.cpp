#include <iostream> 
using namespace std ;
int main(){
    int r = 5 ;
    for(int i=0 ; i<r ; i++){
        for(int j = 0 ; j<=i ; j++){
            if(i==0 || i==4 || j==0 || j==i){
                cout<<"* ";
            }
            else{
                cout<<"  " ;
            }
            
        }
        cout<<endl ;
    }
    
}