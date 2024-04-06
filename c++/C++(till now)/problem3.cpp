#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
bool prefixsuffixsum(vector<int>&v){    //if we want to find index then use int
    int totalsum=0;
    for(int i=0;i<v.size();i++){
        totalsum+=v[i];

    }
    int prefixsum=0;
    for(int i=0;i<v.size();i++){
        prefixsum+=v[i];
        int suffixsum = totalsum-prefixsum;
        if(prefixsum==suffixsum){
           /* int a;
            a=i;
            cout<<a<<" ";*/ //output will be 1 0 if we take 6,2,4,3,1 then  consider 1
            
            return true;
        }
        
    }
    return false;
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
    cout<<prefixsuffixsum(v);
}