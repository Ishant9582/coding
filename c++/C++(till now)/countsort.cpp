#include<iostream>
using namespace std;
void countsort(vector<int>&v){
    int n = v.size();
    //max element finding
    int max_ele = INT_MIN ; 
    for(int i=0;i<n;i++){
        max_ele = max(v[i],max_ele);
    }
    //crete frequency array
    vector<int>freq(max_ele +1 ,0);
    for(int i=0;i<n;i++){
        freq(v[i])++;
    }
    //cal. cumulative frequency
    for(int i=1;i<=max_ele,i++){
        freq[i]+=freq[i--] /////recheck
    }
    //cal. sorted array 
    vector<int>ans(n){
        for(int i=n-1;i>=0;i--){
            ans[--freq[v[]]] = v[i] ; 
        }
    }
    //copy back to original
            
}