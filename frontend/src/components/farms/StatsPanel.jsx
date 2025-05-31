import { Building2 } from 'lucide-react';
import Card from '../ui/Card';
import { CardContent } from '../ui/Card';

/**
 * Farm statistics dashboard panel
 * @param {Object} props
 * @param {Object} props.statistics - Statistical data for farms
 */
function StatsPanel({ statistics }) {
    const { totalFarms, totalAnimals, totalUsers, totalArea } = statistics;

    return (
        <div className="mb-4 md:mb-6 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            <Card variant="rural" className="shadow-sm">
                <CardContent className="p-2 sm:p-4">
                    <div className="flex flex-col items-center text-center">
                        <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700 mb-1 sm:mb-2" />
                        <h3 className="text-base sm:text-lg font-semibold text-amber-900">{totalFarms}</h3>
                        <p className="text-amber-700 text-xs sm:text-sm">Registered Farms</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card variant="palha" className="shadow-sm">
                <CardContent className="p-2 sm:p-4">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-xl sm:text-2xl font-bold text-amber-800 mb-1 sm:mb-2">{totalArea}</span>
                        <p className="text-amber-700 text-xs sm:text-sm">Total Hectares</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card variant="verde" className="shadow-sm">
                <CardContent className="p-2 sm:p-4">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{totalAnimals}</span>
                        <p className="text-white text-xs sm:text-sm">Registered Animals</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card variant="terra" className="shadow-sm">
                <CardContent className="p-2 sm:p-4">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{totalUsers}</span>
                        <p className="text-white text-xs sm:text-sm">Linked Users</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default StatsPanel; 