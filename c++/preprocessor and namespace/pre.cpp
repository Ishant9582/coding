#include<iostream>
using namespace std;
#define c cout
#define pi 3.1425
#ifndef pi
    #define pi 6
#endif
#define fun(x ,  y) (x>y?x:y)
int main(){
    c<<"hello"<<endl ;
    cout<<pi<<endl;
    cout<<fun(10,12);
}