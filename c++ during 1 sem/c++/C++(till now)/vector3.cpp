#include<iostream>
#include<vector>
using namespace std;
int main(){
    vector<int>v(5);
    for(int i=0;i<5;i++){
       
        cin>>v[i];
    }
    cout<<"enter x"<<endl;
    int x;
    cin>>x;
    int occurence=0;
    for(int i=0;i<v.size();i++){
        if(v[i]>x){
            occurence+=1;
        }

    }

    cout<<occurence;
}