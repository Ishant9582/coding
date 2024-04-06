#include<iostream>
#include<string.h>
using namespace std;
int main(){
    string s = "hello" ;
    string::iterator i;
    for(i = s.begin();i<s.end();i++){
        cout<<*i<<endl ;     
    }
    //for converting lower to upper case 
        for(i = s.begin();i<s.end();i++){
        *i = *i - 32 ;     
    }
    cout<<s<<endl ; 



                                                  //or

    for(int i = 0;i<s.length();i++){
        //
        cout<<s[i]<<endl ;    
    }
    // upper to lower    
    for(int i = 0;i<s.length();i++){
        //
        s[i] = s[i] + 32 ;     
    }
    cout<<s<<endl ;

}