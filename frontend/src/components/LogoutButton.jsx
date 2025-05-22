import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftFromLine } from 'lucide-react';
import PropTypes from 'prop-types';
import { Button } from './ui/button';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from './ui/dialog';

function LogoutButton({ onLogout, expanded }) {
    const [open, setOpen] = React.useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <motion.button
                    className="flex items-center p-4 rounded-lg mx-2 my-1 font-semibold bg-transparent hover:bg-[#fff8f0]/10 hover:text-[#fff8f0] transition-colors duration-200 text-[#fff8f0]"
                    tabIndex={0}
                    aria-label="Abrir diálogo de sair"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ArrowLeftFromLine className="mr-2 w-5 h-5" />
                    <span
                        className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100 text-[#fff8f0]`}
                    >
                        Sair
                    </span>
                </motion.button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Deseja realmente sair?</DialogTitle>
                <DialogDescription>
                    Você será deslogado e voltará para a tela de login.
                </DialogDescription>
                <div className="flex justify-end gap-2 mt-4">
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                        tabIndex={0}
                    >
                        Cancelar
                    </Button>
                    <Button
                        className={'bg-red-500'}
                        variant="destructive"
                        onClick={onLogout}
                        tabIndex={0}
                    >
                        Sair
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

LogoutButton.propTypes = {
    onLogout: PropTypes.func.isRequired,
    expanded: PropTypes.bool,
};

LogoutButton.defaultProps = {
    expanded: false,
};

export default LogoutButton;
