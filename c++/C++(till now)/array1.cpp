#include <iostream>
using namespace std;
int main()
{
    int array[5] = {1, 2, 3, 4, 5};
    int sum = 0;
    int size = sizeof(array) / sizeof(array[0]);
    for (int i = 0; i < size; i++)
    {
        sum += array[i];
    }
    cout << sum << endl;
}