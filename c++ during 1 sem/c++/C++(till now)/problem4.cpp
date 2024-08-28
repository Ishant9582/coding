#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int prefixsuffixsum(vector<int>&v){    //if we want to find index then use int
    int totalsum=0;
    for(int i=0;i<v.size();i++){
        totalsum+=v[i];

    }
    int prefixsum=0;
    for(int i=0;i<v.size();i++){
        prefixsum+=v[i];
        int suffixsum = totalsum-prefixsum;
        if(prefixsum==suffixsum){
            int b;
            b=i;
            return b;
            
        }
        
    }
    
}
int main(){
    int n;
    cin>>n;
    vector<int>v;
    for(int i=0;i<n;i++){
        int ele;
        cin>>ele;
        v.push_back(ele);
    }
    int a;
    a=prefixsuffixsum(v);
    cout<<a;
}