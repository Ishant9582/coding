#include<iostream>
#include<vector>
using namespace std;
int main(){
    vector<int>v(5);
    for(int i=0;i<5;i++){
       
        cin>>v[i];
    }
    
  
    int occurence=0;
    /* for(int i=0;i<v.size();i++){
        if(v[i]==x){
            occurence=i;
        }

    }

    cout<<occurence;*/
    //using reverse transversing
    for(int i=v.size()-1;i>=0;i--){
        if(v[i]>v[i-1]){
            occurence+=1;
            
        }
    }
    if(occurence==v.size()){
        cout<<"sorted"<<endl;
    } 
}    