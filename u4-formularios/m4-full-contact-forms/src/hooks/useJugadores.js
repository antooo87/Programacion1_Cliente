import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { borrarJugador, inscribirJugador, obtenerJugadores } from "../api.js";

export function useJugadores(categoria) {
  return useQuery({
    queryKey: ["jugadores", categoria],
    queryFn: () => obtenerJugadores(categoria),
  });
}

export function useInscribirJugador() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: inscribirJugador,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["jugadores"] }),
  });
}

export function useBorrarJugador() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: borrarJugador,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["jugadores"] }),
  });
}
