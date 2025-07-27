// Modal functions
function openModal(productType) {
    document.getElementById('productModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Set modal title based on product
    const titles = {
        'hose-standard': 'Mangueira Standard',
        'hose-high-pressure': 'Mangueira de Alta Pressão',
        'hose-chemical': 'Mangueira Química',
        'hose-food': 'Mangueira Alimentícia',
        'hose-insulated': 'Mangueira Isolada',
        'hose-flexible': 'Mangueira Flexível'
    };
    document.getElementById('modalTitle').textContent = titles[productType] || 'Detalhes do Produto';

    // Reset to document tab when opening modal
    openTab('document-tab');

    // Render charts for this product
    renderProductCharts(productType);
}

function closeModal() {
    document.getElementById('productModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Quality Dashboard functions
function openQualityDashboard() {
    document.getElementById('qualityDashboard').classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Render quality dashboard charts
    renderQualityDashboardCharts();
}

function closeQualityDashboard() {
    document.getElementById('qualityDashboard').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Tab functions
function openTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabId).classList.add('active');

    // Update active tab button
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        if (button.getAttribute('onclick').includes(tabId)) {
            button.classList.add('border-b-2', 'border-blue-500', 'text-blue-600');
            button.classList.remove('text-gray-500');
        } else {
            button.classList.remove('border-b-2', 'border-blue-500', 'text-blue-600');
            button.classList.add('text-gray-500');
        }
    });
}

// Close modal when clicking outside
document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

document.getElementById('qualityDashboard').addEventListener('click', function(e) {
    if (e.target === this) {
        closeQualityDashboard();
    }
});

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeQualityDashboard();
    }
});

// Chart rendering functions
function renderProductCharts(productType) {
    // Approval Rate Chart (Doughnut)
    const approvalCtx = document.getElementById('approvalRateChart').getContext('2d');
    new Chart(approvalCtx, {
        type: 'doughnut',
        data: {
            labels: ['Aprovadas', 'Rejeitadas'],
            datasets: [{
                data: [95, 5],
                backgroundColor: ['#10B981', '#EF4444'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Rejection Reasons Chart (Bar)
    const rejectionCtx = document.getElementById('rejectionReasonsChart').getContext('2d');
    new Chart(rejectionCtx, {
        type: 'bar',
        data: {
            labels: ['Espessura', 'Pressão', 'Vazamento', 'Superfície', 'Dimensão'],
            datasets: [{
                label: 'Quantidade',
                data: [12, 8, 5, 3, 2],
                backgroundColor: '#F59E0B'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Monthly Trend Chart (Line)
    const trendCtx = document.getElementById('monthlyTrendChart').getContext('2d');
    new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Taxa de Aprovação (%)',
                data: [92, 93, 94, 93.5, 94.5, 95],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 90,
                    max: 100
                }
            }
        }
    });
}

function renderQualityDashboardCharts() {
    // Product Approval Chart (Horizontal Bar)
    const productApprovalCtx = document.getElementById('productApprovalChart').getContext('2d');
    new Chart(productApprovalCtx, {
        type: 'bar',
        data: {
            labels: ['Standard', 'Alta Pressão', 'Química', 'Alimentícia', 'Isolada', 'Flexível'],
            datasets: [{
                label: 'Taxa de Aprovação (%)',
                data: [95.3, 93.6, 92.1, 93.8, 94.2, 95.0],
                backgroundColor: [
                    '#3B82F6',
                    '#EF4444',
                    '#10B981',
                    '#F59E0B',
                    '#8B5CF6',
                    '#EC4899'
                ]
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    min: 90,
                    max: 100
                }
            }
        }
    });

    // Main Rejection Chart (Pie)
    const mainRejectionCtx = document.getElementById('mainRejectionChart').getContext('2d');
    new Chart(mainRejectionCtx, {
        type: 'pie',
        data: {
            labels: ['Espessura', 'Pressão', 'Vazamento', 'Dimensão', 'Outros'],
            datasets: [{
                data: [35, 25, 20, 15, 5],
                backgroundColor: [
                    '#EF4444',
                    '#F59E0B',
                    '#10B981',
                    '#3B82F6',
                    '#8B5CF6'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Quality Trend Chart (Line)
    const qualityTrendCtx = document.getElementById('qualityTrendChart').getContext('2d');
    new Chart(qualityTrendCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [
                {
                    label: 'Taxa de Aprovação (%)',
                    data: [91.5, 92.3, 93.1, 93.8, 94.2, 94.8],
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.05)',
                    fill: true,
                    tension: 0.3
                },
                {
                    label: 'Rejeições (un)',
                    data: [210, 190, 175, 155, 140, 120],
                    borderColor: '#EF4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.05)',
                    fill: true,
                    tension: 0.3,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 90,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Taxa de Aprovação (%)'
                    }
                },
                y1: {
                    position: 'right',
                    min: 0,
                    max: 250,
                    grid: {
                        drawOnChartArea: false
                    },
                    title: {
                        display: true,
                        text: 'Rejeições (un)'
                    }
                }
            }
        }
    });
}

// Render summary chart on page load
document.addEventListener('DOMContentLoaded', function() {
    const summaryProductApprovalCtx = document.getElementById('summaryProductApprovalChart').getContext('2d');
    new Chart(summaryProductApprovalCtx, {
        type: 'bar',
        data: {
            labels: ['Standard', 'Alta Pressão', 'Química', 'Alimentícia', 'Isolada', 'Flexível'],
            datasets: [{
                label: 'Taxa de Aprovação (%)',
                data: [95.3, 93.6, 92.1, 93.8, 94.2, 95.0],
                backgroundColor: [
                    '#3B82F6',
                    '#EF4444',
                    '#10B981',
                    '#F59E0B',
                    '#8B5CF6',
                    '#EC4899'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 90,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});