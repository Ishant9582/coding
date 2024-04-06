#include<iostream>
#include<vector>
using namespace std;
int main(){
    vector<int>v(5);
    for(int i=0;i<5;i++){
       
        cin>>v[i];
    }
    
    
    int b=1;
    for(int i=0;i<v.size();i++){
        if(v[i]>v[i-1]){
            
           
            b += 1;
        }
    }    
        //else{
        //    cout<<"not sorted";
        //}

    //}
    if(b==v.size()){
        cout<<"sorted";
    }
    else{
        cout<<"not sorted";
    }


    
    
}    