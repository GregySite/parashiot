
import { parachiots } from './src/data/parachiots';
import { isCurrentParasha } from './src/utils/hebrewCalendar';

console.log('--- Verifying UI Component Logic ---');
console.log(`Total Parashiot: ${parachiots.length}`);

try {
    parachiots.forEach(p => {
        // console.log(`Checking string: ${p.name}`);
        const isIsrael = isCurrentParasha(p.name, 'israel');
        const isDiaspora = isCurrentParasha(p.name, 'diaspora');
    });
    console.log('SUCCESS: All parashiot checked without error.');
} catch (error) {
    console.error('CRITICAL ERROR during iteration:');
    console.error(error);
}
