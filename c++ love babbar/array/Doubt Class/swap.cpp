#include <iostream>
using namespace std ;
int main() {
    int a = 5 , b = 6 ;
    // using arithmetic 
    //  a = a+b ;
    //  b = a-b ;
    //  a = a-b ;
    // cout<<a<<" "<<b ;



    // using xor method
    a = a^b ;
    cout<<a<<endl ;
    b = b^a ;
    a = a^b ;
    cout<<a<<" "<<b ;
}