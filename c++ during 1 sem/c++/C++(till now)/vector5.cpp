#include<iostream>
#include<vector>
using namespace std;
int main(){
    vector<int>v(6);
    for(int i=0;i<6;i++){
       
        cin>>v[i];
    }
    int a=0;
    int b=0;
    for(int i=0;i<v.size();i++){
        if((i%2)==0){
            a+=v[i];
        }
        else{
            b+=v[i];
        }
    }
    cout<<a<<endl;
    cout<<b<<endl;
    cout<<(a-b)<<endl;
}    