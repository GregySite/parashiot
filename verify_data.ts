
import { parachiots } from './src/data/parachiots';
import { parashiotAliyot } from './src/data/aliyot';

console.log('Verifying Parasha Data Consistency...');

let errors = 0;

parachiots.forEach(p => {
    const aliyotData = parashiotAliyot.find(a => a.parashaId === p.id);
    if (!aliyotData) {
        console.error(`Missing Aliyot data for Parasha ${p.name} (ID: ${p.id})`);
        errors++;
        return;
    }

    const totalAliyotVerses = aliyotData.aliyot.reduce((sum, a) => sum + a.verses, 0);
    
    if (totalAliyotVerses !== p.verses) {
        console.warn(`Mismatch for ${p.name}:`);
        console.warn(`  Summary Verses: ${p.verses}`);
        console.warn(`  Sum of Aliyot: ${totalAliyotVerses}`);
        console.warn(`  Difference: ${p.verses - totalAliyotVerses}`);
        errors++;
    }
});

if (errors === 0) {
    console.log('Verification successful! All verse counts match.');
} else {
    console.log(`Found ${errors} discrepancies.`);
}
