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
    /* for(int i=0;i<v.size();i++){
        if(v[i]==x){
            occurence=i;
        }

    }

    cout<<occurence;*/
    //using reverse transversing
    for(int i=v.size()-1;i>=0;i--){
        if(v[i]==x){
            occurence=i;
            cout<<occurence;
            break;
            
        }
    }
}      