#include<iostream>
#include<string.h>
using namespace std ;
int main(){
    string s  = "helloooolo"   ;
    string str  = "world"   ;
    cout<<s.substr(3)<<endl; 
    cout<<s.substr(3,5)<<endl; 
    cout<<s.compare(str)<<endl;
    cout<<s.at(2) ;
    //string s3 = s+str ;
    cout<<(s+str)<<endl;
    str = s ;
    cout<<str<<endl ;
}