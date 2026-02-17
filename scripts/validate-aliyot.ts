// validate-aliyot.ts

// Function to validate aliyot data
function validateAliyot(aliyot: any[]): string[] {
    const errors: string[] = [];

    // Check each aliyah for verse count consistency
    for (let i = 0; i < aliyot.length; i++) {
        const aliyah = aliyot[i];

        // Assume each aliyah has a 'verseCount' property
        if (aliyah.verseCount < 0) {
            errors.push(`Aliyah ${i + 1} has an invalid verse count: ${aliyah.verseCount}`);
        }
    }

    return errors;
}

// Example usage
const aliyotData = [
    { verseCount: 10 },
    { verseCount: -1 },  // Example of invalid data
    { verseCount: 5 }
];

const validationErrors = validateAliyot(aliyotData);
console.log(validationErrors); // Log validation errors