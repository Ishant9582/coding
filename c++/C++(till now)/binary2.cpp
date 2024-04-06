#include<iostream>
#include<vector>
using namespace std;
int binary(vector<int>&v,int target){
    int f = 0;
    int l = v.size()-1;
    int ans = -1;
    while(f<=l){
        int mid = f + (l-f)/2 ;
        if(v[mid]>=target){
            ans = mid;
            l = mid-1;
        }
        else {
            f = mid+1 ;
        }
        
    }
    return ans ;
}
int binary2(vector<int>&v,int target){
    int f = 0;
    int l = v.size()-1;
    int ans = -1;
    while(f<=l){
        int mid = f + (l-f)/2 ;
        if(v[mid]>target){
            ans = mid;
            l = mid-1;
        }
        else {
            f = mid+1 ;
        }
        
    }
    return ans ;
}
int main(){
    vector<int>v{1,2,5,5,5,5,6,7,8,9};
    int target = 5;
    vector<int>result;
    int a = binary(v,target);
    if(v[a]!=target){
        result.push_back(-1);
        result.push_back(-1);
    }
    else{
        int b = binary2(v,target);
        result.push_back(a);
        result.push_back(b-1);

    }
    cout<<result[0]<<" "<<result[1];
}