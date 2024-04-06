#include<iostream>
#include<string.h>
using namespace std;
int main(){
    string s1  ;
    string s2 = "burrah" ;
    getline(cin,s1);
    cout<<s1<<endl;
    s1.append("b") ;   // capacity apne aap ko adjust kr legi agr jyada cheeje dal di and out of capacity chli gyi to
    cout<<s1<<endl;
    s1.insert(3,"p");     //  s1.insert(4,"kkular",2) ase case m bus vo kk insert krega
    cout<<s1<<endl;
    s1.replace(3,2,"j"); // 2 ka mtlab  3 place p jo element uska milake 1 aur ki jgah ye replace hoga
    cout<<s1<<endl;
    s1.push_back('z');
    cout<<s1<<endl;
    s1.pop_back() ;
    cout<<s1<<endl;
    s1.swap(s2);
    cout<<s1<<endl;
}