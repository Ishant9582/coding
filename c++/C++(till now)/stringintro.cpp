#include<iostream>
#include<string.h>
using namespace std;
int main(){
    string s1  ;
    getline(cin,s1);
    cout<<s1<<endl;
    cout<<(s1.length())<<endl;
    cout<<(s1.size())<<endl;
    cout<<(s1.capacity())<<endl;
    s1.resize(40) ;                    // this cant be used with cout
    cout<<(s1.capacity())<<endl;
    cout<<(s1.max_size())<<endl;
    s1.clear();                         // this cant be used with cout
    cout<<(s1.empty())<<endl;
 



}