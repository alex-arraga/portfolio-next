import { toast } from 'sonner';

function MyToast() {
    return (
        <button onClick={() => toast('This is a sonner toast')}>
            Render my toast
        </button>
    );
}