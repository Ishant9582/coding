#include<iostream>
using namespace std;
int swap(string ch,int p,int*hu){
    for(int i=0;i<ch.size();i++){
        if(ch[i]==p){
            *hu = i;

        }
    }

}
int main(){
    string ch="abcde";
    char p = 'b';
    int index;
    swap(ch,p,&index);
    cout<<index;
}