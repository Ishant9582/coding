#include<iostream>
using namespace std;
int main(){
    int a=2 , b =3 ;
    b = a++ + b-- ;
    a = a-- + ++b ;
    b = ++a + --b ;
    cout<<a<<" " <<b ;
}