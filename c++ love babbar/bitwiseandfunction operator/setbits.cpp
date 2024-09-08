#include <iostream>
using namespace std ;
int main(){
    int setcount = 0 ;
    int number = 10 ;
    while(number != 0){
        int s = (number&1);
        
        setcount = setcount+s ;
        number = number>>1 ;
    }
    cout<<"no. of set bits are : "<<setcount ; 

}