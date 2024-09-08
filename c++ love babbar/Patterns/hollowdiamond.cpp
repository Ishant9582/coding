#include <iostream>
using namespace std;
void inverted(int n)
{
        for (int i = 1; i <= n; i++)
    {
        for (int j = n; j >= 1; j--)
        {
            if (j > n - i + 1)
            {
                cout << " ";
            }
            else
            {
                // cout<<j<<n ; 
                if ((j==n-i+1) || j==1)
                {
                    cout << "* ";
                }
                else
                {
                    cout << "  ";
                }
            }
        }
        cout << endl;
    }
}
void fullpyramid(int n)
{
       for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            if (j <= n - i)
            {
                cout << " ";
            }

            else
            {
                if (i == 1  || j==(n-i+1) || j==n)
                {
                    cout << "* ";
                }
                else{
                    cout<<"  ";
                }
            }
        }
        cout << endl;
    }
}
int main(){
    int n = 5 ;
    
    
    fullpyramid(n);
    inverted(n) ;
}