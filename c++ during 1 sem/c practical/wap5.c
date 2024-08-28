#include <stdio.h>
int main()
{
    int eng, maths, chem, phy, CS;
    printf("Enter the score of eng :");
    scanf("%d", &eng);

    printf("Enter the score of maths :");
    scanf("%d", &maths);

    printf("Enter the score of chem :");
    scanf("%d", &chem);

    printf("Enter the score of phy :");
    scanf("%d", &phy);

    printf("Enter the score of CS : ");
    scanf("%d", &CS);

    int avg = (eng + maths + chem + phy + CS) / 5;
    if (avg > 90)
    {
        printf("Grade achieved : A");
    }
    else if (75 < avg && avg <= 90)
    {
        printf("Grade achieved : B");
    }
    else if (75 < avg && avg <= 60)
    {
        printf("Grade achieved : C");
    }
    else if (60 < avg && avg <= 75)
    {
        printf("Grade achieved : D");
    }

    else if (avg <= 50)
    {
        printf("Grade achieved : F");
    }

    else
    {
        printf("Invalid score entered :");
    }
    return 0;
}