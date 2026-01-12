'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface Ingrediente {
  id: number;
  nombre: string;
  cantidad: number;
  unidad: string;
}

export default function Home() {
  const [ingredientes, setIngredientes] = useState<Ingrediente[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    nombre: '',
    cantidad: '',
    unidad: '',
  });

  // Cargar ingredientes al montar el componente
  useEffect(() => {
    cargarIngredientes();
  }, []);

  const cargarIngredientes = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('ingredientes')
        .select('*')
        .order('nombre', { ascending: true });

      if (error) {
        console.error('Error al cargar ingredientes:', error);
        alert(`Error al cargar ingredientes: ${error.message}`);
      } else {
        setIngredientes(data || []);
      }
    } catch (error) {
      console.error('Error inesperado:', error);
      alert(`Error inesperado: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAddIngrediente = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre || !formData.cantidad || !formData.unidad) {
      alert('Por favor, completa todos los campos');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('ingredientes')
        .insert([
          {
            nombre: formData.nombre,
            cantidad: parseFloat(formData.cantidad),
            unidad: formData.unidad,
          },
        ])
        .select();

      if (error) {
        console.error('Error al añadir ingrediente:', error);
        alert(`Error al añadir ingrediente: ${error.message}`);
      } else {
        // Recargar la lista de ingredientes
        await cargarIngredientes();
        // Limpiar el formulario
        setFormData({ nombre: '', cantidad: '', unidad: '' });
        alert('✅ Ingrediente añadido correctamente');
      }
    } catch (error) {
      console.error('Error inesperado:', error);
      alert(`Error inesperado: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  const handleDeleteIngrediente = async (id: number) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este ingrediente?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('ingredientes')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error al eliminar ingrediente:', error);
        alert(`Error al eliminar ingrediente: ${error.message}`);
      } else {
        // Recargar la lista de ingredientes
        await cargarIngredientes();
        alert('✅ Ingrediente eliminado correctamente');
      }
    } catch (error) {
      console.error('Error inesperado:', error);
      alert(`Error inesperado: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-8 text-center">
          CultoOps - Control de Stock
        </h1>

        {/* Layout de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Columna Izquierda: Añadir Ingrediente */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">
              Añadir Stock
            </h2>
            <form onSubmit={handleAddIngrediente} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Ej: Pollo, Tomate..."
                />
              </div>

              <div>
                <label htmlFor="cantidad" className="block text-sm font-medium mb-2">
                  Cantidad
                </label>
                <input
                  type="number"
                  id="cantidad"
                  step="0.01"
                  value={formData.cantidad}
                  onChange={(e) => setFormData({ ...formData, cantidad: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Ej: 15.5"
                />
              </div>

              <div>
                <label htmlFor="unidad" className="block text-sm font-medium mb-2">
                  Unidad
                </label>
                <input
                  type="text"
                  id="unidad"
                  value={formData.unidad}
                  onChange={(e) => setFormData({ ...formData, unidad: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Ej: kg, litros, unidades..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:shadow-orange-600/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Añadir Stock
              </button>
            </form>
          </div>

          {/* Columna Derecha: Despensa */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">
              Despensa
            </h2>

            {loading ? (
              <div className="text-center py-8 text-gray-400">
                Cargando ingredientes...
              </div>
            ) : ingredientes.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                No hay ingredientes en la despensa
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold">Nombre</th>
                      <th className="text-left py-3 px-4 font-semibold">Cantidad</th>
                      <th className="text-left py-3 px-4 font-semibold">Unidad</th>
                      <th className="text-center py-3 px-4 font-semibold">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ingredientes.map((ingrediente) => (
                      <tr
                        key={ingrediente.id}
                        className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
                      >
                        <td className="py-3 px-4">{ingrediente.nombre}</td>
                        <td className="py-3 px-4">
                          <span
                            className={
                              ingrediente.cantidad < 10
                                ? 'text-red-500 font-semibold'
                                : 'text-white'
                            }
                          >
                            {ingrediente.cantidad}
                            {ingrediente.cantidad < 10 && (
                              <span className="ml-2 text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                                Poco Stock
                              </span>
                            )}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-400">{ingrediente.unidad}</td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => handleDeleteIngrediente(ingrediente.id)}
                            className="text-red-400 hover:text-red-500 transition-colors"
                            title="Eliminar ingrediente"
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
